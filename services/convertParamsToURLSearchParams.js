export const convertParamsToURLSearchParams = (params) =>  {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        searchParams.append(key, params[key]);
      }
    }
    return searchParams;
  }