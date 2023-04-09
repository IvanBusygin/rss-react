import { useState, useCallback } from 'react';
import { IDataArticle } from '../types/INews';
import { makeUrl } from '../utils/utils';

interface IParams {
  endpoint: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  query?: string;
  headers?: Record<string, string>;
  data?: Record<string, unknown>;
}

interface IManageData {
  (data: IDataArticle): void;
}

interface IFetchData {
  isLoading: boolean;
  HTTPRequest: (options: IParams, manageData: IManageData) => Promise<void>;
}

const useFetch = (): IFetchData => {
  const [isLoading, setIsLoading] = useState(false);

  const HTTPRequest = useCallback(async (params: IParams, manageData: IManageData) => {
    setIsLoading(true);

    const errorHandler = (res: Response): Response => {
      if (!res.ok) {
        if (res.status === 401 || res.status === 404)
          console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
      }
      return res;
    };

    fetch(makeUrl(params.endpoint, params.query), { method: 'GET' })
      .then(errorHandler)
      .then((res) => res.json())
      .then((data: IDataArticle) => manageData(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    HTTPRequest,
  };
};

export default useFetch;
