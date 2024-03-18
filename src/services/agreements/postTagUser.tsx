import { getApiUrl } from 'config';
import { validPermissionAdmin, validPermissionEditor } from 'util/auth/auth';
import { responseStatus } from 'util/util';

interface PostTagsProps {
  path: string;
  options: any;
  access: any;
}

export const postTagUser = async ({ path, options, access }: PostTagsProps) => {
  try {
    if (validPermissionAdmin(access.role) || validPermissionEditor(access.role)) {
      const response = await fetch(getApiUrl(path), options);
      if (response.status === 201 || response.status === 200) return 0;
      responseStatus(response, access.router, access.dispatch);
    }
    return 1;
  } catch (e) {
    return 1;
  }
};
