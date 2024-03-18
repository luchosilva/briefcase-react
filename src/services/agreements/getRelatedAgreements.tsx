import { getApiUrl } from 'config';
import { responseStatus } from 'util/util';

interface GetBody {
  body: any;
  access: any;
}

export const getRelatedAgreements = async ({ body, access }: GetBody) => {
  try {
    let urlDefault = `/agreements?page=1`;
    if (body.tags.length > 0) {
      let encodeTags = encodeURIComponent(`[${body.tags.at(0).corr_etiq}]`);
      urlDefault += `&tags=${encodeTags}`;
    }
    const response = await fetch(getApiUrl(urlDefault), { credentials: 'include' });
    if (response.status === 200) return await response.json();
    responseStatus(response, access.router, access.dispatch);
    return [];
  } catch (error) {
    return [];
  }
};
