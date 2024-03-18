import { getApiUrl } from 'config';
import { bodyToken, swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus } from 'util/util';

interface GetTagsProps {
  path: string;
  setTags: any;
  setMeta: any;
  setLoading: any;
  access: any;
}

export const getTagsPage = async ({ path, setTags, setMeta, setLoading, access }: GetTagsProps) => {
  setLoading(true);
  try {
    if (!validPermission(access.role)) return swalErrorAccess();
    const response = await fetch(getApiUrl(path), bodyToken('GET'));
    if (response.status === 200) {
      const json = await response.json();
      setTags(json.data);
      setMeta(json.meta);
    } else {
      setTags([]);
      setMeta([]);
    }
    responseStatus(response.status, access.router, access.dispatch);
  } catch (err) {
    setTags([]);
    setMeta([]);
  } finally {
    setLoading(false);
  }
};
