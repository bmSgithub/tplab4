//algunas descripciones vienen con html tags o data extra innecesaria.
export function removeHtmlTagsAndEntities(input: string): string {
    const withoutHtmlTags = input.replace(/<\/?[^>]+(>|$)/g, ' ');
    return withoutHtmlTags.replace(/&nbsp;/g, ' ');
  }