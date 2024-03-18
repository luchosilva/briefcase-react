import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { selectAuth } from '../redux/auth/slices/authSlice';
import { useRouter } from 'next/router';

export const useAccess = () => {
  const { rut, role } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return { rut, role, dispatch, router };
};
