export const mockApi = (status: number, data: any) => () =>
  new Promise((resolve) => resolve({ data: data, status: status }));
