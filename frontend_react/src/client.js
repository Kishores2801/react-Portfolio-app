import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "rmla125w",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "sk5ntKQ2VSakg43xXigaNkymhtDzGzxR8d6qrGeGz1lA5GsKQl8vqYPw6Kj6vIPOr7bjlHkOUFq4AY5iNtI5s4oOIyGX16YkWkwMyS2Rd0eG7WwW678LObElewEf1mF9ur8N9qJO2kxA5OBmypd4tJ3uPo8RiRVLMq7meXJLxoRzVl6FDq9X",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);