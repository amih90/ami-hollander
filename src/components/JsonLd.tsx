interface PersonProps {
  name: string;
  jobTitle: string;
  employer: string;
  url: string;
  sameAs: string[];
}

export function JsonLdPerson({ name, jobTitle, employer, url, sameAs }: PersonProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: { "@type": "Organization", name: employer },
    url,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleProps {
  title: string;
  datePublished: string;
  description: string;
  authorName: string;
  url: string;
}

export function JsonLdArticle({ title, datePublished, description, authorName, url }: ArticleProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished,
    description,
    author: { "@type": "Person", name: authorName },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
