import { defineStore } from 'pinia';

export const useContactStore = defineStore('contactStore', {
  state: () => ({
    loading: false,
    error: null,
  }),

  actions: {
    async sendContactRequest(contactDetails, applicationId) { 
      this.loading = true;
      this.error = null;

      try {
        if (!applicationId) {
          throw new Error("L'ID de l'application est introuvable.");
        }

        // Appel de la mutation GraphQL avec l'ID de l'application
        const response = await GqlCreateContactRequest({
          input: {
            ...contactDetails,
            application_id: applicationId,
          },
        });

        // Vérifier si la réponse contient des données
        const contactRequest = response.createContactRequest;
        if (!contactRequest) {
          throw new Error("Aucune donnée retournée par la requête.");
        }

        return contactRequest;

      } catch (error) {
        this.error = error.message || "L'envoi de votre message a échoué.";
        throw error; // Relancer l'erreur pour la gérer dans le composant Vue

      } finally {
        this.loading = false; // Réinitialiser l'état de chargement
      }
    },
  },
});
