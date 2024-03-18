import { getApiUrl } from 'config';
import { swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus, validateFilter } from 'util/util';

interface GetFilterAgreementsProps {
  page: number;
  body: any;
  setTotalPages: any;
  setAgreements: any;
  setLoading: any;
  setPage: any;
  access: any;
}

export const getFilterAgreements = async ({ page, body, setTotalPages, setAgreements, setLoading, setPage, access }: GetFilterAgreementsProps) => {
  try {
    setLoading(true);
    setPage(page);
    let urlDefault = `/agreements?page=${page}`;
    urlDefault = validateFilter(urlDefault, body);

    if (body.tags.length > 0) {
      let encodeTags = encodeURIComponent(`[${body.tags}]`);
      urlDefault += `&tags=${encodeTags}`;
    }

    if (!validPermission(access.role)) return swalErrorAccess();

    const response = await fetch(getApiUrl(urlDefault), { credentials: 'include' });
    if (response.status === 200) {
      const json = await response.json();
      if (typeof json !== 'undefined') {
        setAgreements(json.agreements);
        setTotalPages(json.tot_convs);
      } else {
        setAgreements([]);
        setTotalPages(0);
      }
    }
    responseStatus(response, access.router, access.dispatch);
  } catch (err) {
    setAgreements([]);
  } finally {
    setLoading(false);
  }
};
