import { defineStore } from 'pinia';

interface ContactRequestInput {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

interface ContactRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useContactStore = defineStore('contactStore', {
  state: () => ({
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async sendContactRequest(contactDetails: ContactRequestInput): Promise<ContactRequest> {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const graphqlEndpoint = config.public.graphqlEndpoint as string;

        const mutation = `
          mutation CreateContactRequest($input: CreateContactRequestInput!) {
            createContactRequest(input: $input) {
              id
              first_name
              last_name
              email
              phone
              subject
              message
              status
              created_at
              updated_at
            }
          }
        `;

        const response = await $fetch(graphqlEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: mutation,
            variables: {
              input: {
                first_name: contactDetails.first_name,
                last_name: contactDetails.last_name,
                email: contactDetails.email,
                phone: contactDetails.phone || null,
                subject: contactDetails.subject || null,
                message: contactDetails.message,
              },
            },
          }),
        }) as any;

        // Check for GraphQL errors
        if (response.errors && response.errors.length > 0) {
          const errorMessage = response.errors.map((err: any) => err.message).join(', ');
          throw new Error(errorMessage);
        }

        // Check if the response contains data
        const contactRequest = response?.data?.createContactRequest;
        if (!contactRequest) {
          throw new Error('No data returned from the request.');
        }

        return contactRequest;

      } catch (error: any) {
        const errorMessage = error?.message || 'Failed to send your message. Please try again.';
        this.error = errorMessage;
        throw new Error(errorMessage);

      } finally {
        this.loading = false;
      }
    },
  },
});
