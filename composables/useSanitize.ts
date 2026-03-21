import DOMPurify from 'dompurify'

/**
 * Composable to sanitize HTML content for safe v-html rendering.
 * Allows only safe tags (links, formatting) — no scripts, iframes, etc.
 */
export const useSanitize = () => {
  const sanitize = (dirty: string): string => {
    if (!process.client) {
      // On server, strip all HTML tags as a safe fallback
      return dirty.replace(/<[^>]*>/g, '')
    }

    return DOMPurify.sanitize(dirty, {
      ALLOWED_TAGS: ['a', 'b', 'i', 'em', 'strong', 'br', 'p', 'span', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
      ADD_ATTR: ['target'],
    })
  }

  return { sanitize }
}
