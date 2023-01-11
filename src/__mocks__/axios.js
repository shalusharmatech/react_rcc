const axios = {
    // get: jest.fn(() => Promise.resolve({ data: {} })),
    get: jest.fn().mockResolvedValue({data:{}}),
    post: jest.fn().mockResolvedValue({data:{}}),
    // create: () => axios,
    defaults: {
      adapter: {},
    },
  };
  
  export default axios;