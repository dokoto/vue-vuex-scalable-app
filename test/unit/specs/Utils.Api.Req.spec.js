import { Get, Put, Post } from '@/common/utils/api/req';
import * as paths from '@/common/utils/api/paths';
import { STATUS, CODES } from '@/common/utils/api/constants';

const buildFetchSpyResolve = (status, body) => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      status,
      json: () => Promise.resolve(body)
    })
  );
};

const buildFetchSpyReject = (status, body) => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.reject({
      status,
      message: body.message
    })
  );
};

describe('Testing POST method of "Req" Class API Caller', () => {
  it('Should capture reject and return ERROR with "message" attribute when fetch(POST) fails', async () => {
    const response = {
      message: 'SyntaxError: Unexpected end of JSON input SyntaxError: Unexpected end of JSON input at JSON.parse () at XMLHttpRequest.onLoad'
    };
    const request = {
      username: 'manuel',
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };
    buildFetchSpyReject(CODES.POST.ERROR, response);
    await expect(Post.fetch(paths.toggles)).rejects.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyReject(CODES.POST.ERROR, response);
    await expect(Post.fetch(paths.toggles, request)).rejects.toHaveProperty('message');
  });

  it('Should capture resolve and return ERROR with "message" attribute for a HTTP 500(ERROR CHUNGO) response', async () => {
    const response = {
      statusText: 'PHP Parse error: syntax error, unexpected "{" in index.php on line 20'
    };
    const request = {
      username: 'manuel',
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };
    buildFetchSpyResolve(CODES.POST.ERROR, response);
    await expect(Post.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyResolve(CODES.POST.ERROR, response);
    await expect(Post.fetch(paths.toggles, request)).resolves.toHaveProperty('message');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 401(NO AUTH) response', async () => {
    const response = {
      message: 'Token accesss unauthorized'
    };
    const request = {
      username: 'manuel',
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };

    buildFetchSpyResolve(CODES.POST.NO_AUTH, response);
    await expect(Post.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.POST.NO_AUTH, response);
    await expect(Post.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 400(BAD REQUEST) response', async () => {
    const response = {
      username: 'A username is required'
    };
    const request = {
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };
    buildFetchSpyResolve(CODES.POST.BAD_REQUEST, response);
    await expect(Post.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.POST.BAD_REQUEST, response);
    await expect(Post.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return SUCCESS with "data" attribute for a HTTP 201(CREATED) response', async () => {
    const response = {
      username: 'manuel',
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };
    const request = {
      username: 'manuel',
      password: 'passwordcomplicadisimo',
      email: 'manuel@cool.email.com'
    };
    buildFetchSpyResolve(CODES.POST.CREATED, response);
    await expect(Post.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.SUCCESS
    );
    buildFetchSpyResolve(CODES.POST.CREATED, response);
    await expect(Post.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});


describe('Testing PUT method of "Req" Class API Caller', () => {
  it('Should capture reject and return ERROR with "message" attribute when fetch(PUT) fails', async () => {
    const response = {
      message: 'SyntaxError: Unexpected end of JSON input SyntaxError: Unexpected end of JSON input at JSON.parse () at XMLHttpRequest.onLoad'
    };
    const request = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyReject(CODES.PUT.ERROR, { response });
    await expect(Put.fetch(paths.toggles)).rejects.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyReject(CODES.PUT.ERROR, { response });
    await expect(Put.fetch(paths.toggles, request)).rejects.toHaveProperty('message');
  });

  it('Should capture resolve and return ERROR with "message" attribute for a HTTP 500(ERROR CHUNGO) response', async () => {
    const response = {
      statusText: 'PHP Parse error: syntax error, unexpected "{" in index.php on line 20'
    };
    const request = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyResolve(CODES.PUT.ERROR, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyResolve(CODES.PUT.ERROR, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('message');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 401(NO AUTH) response', async () => {
    const response = {
      message: 'Token accesss unauthorized'
    };
    const request = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyResolve(CODES.PUT.NO_AUTH, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.PUT.NO_AUTH, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 404(NOT FOUND) response', async () => {
    const response = {
      username: 'Username "pericoElDeLosPalotes" not found'
    };
    const request = {
      username: 'pericoElDeLosPalotes',
      email: 'jajajaja@IgoingtToDestroyYou.com'
    };
    buildFetchSpyResolve(CODES.PUT.NOT_FOUND, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.PUT.NOT_FOUND, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 400(BAD REQUEST) response', async () => {
    const response = {
      home: 'The field "home" must be "boolean"'
    };
    const request = {
      home: 'My bad input value',
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyResolve(CODES.PUT.BAD_REQUEST, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.PUT.BAD_REQUEST, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return SUCCESS with "data" attribute for a HTTP 204(NO CONTENT) response', async () => {
    const response = {};
    const request = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyResolve(CODES.PUT.NO_CONTENT, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.SUCCESS
    );
    buildFetchSpyResolve(CODES.PUT.NO_CONTENT, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return SUCCESS with "data" attribute for a HTTP 200(SUCCESS) response', async () => {
    const response = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    const request = {
      home: false,
      heavyModule: false,
      newModule: false
    };
    buildFetchSpyResolve(CODES.PUT.SUCCESS, response);
    await expect(Put.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.SUCCESS
    );
    buildFetchSpyResolve(CODES.PUT.SUCCESS, response);
    await expect(Put.fetch(paths.toggles, request)).resolves.toHaveProperty('data');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});

describe('Testing GET method of "Req" Class API Caller', () => {
  it('Should capture reject and return ERROR with "message" attribute when fetch(GET) fails', async () => {
    const response = {
      message: 'SyntaxError: Unexpected end of JSON input SyntaxError: Unexpected end of JSON input at JSON.parse () at XMLHttpRequest.onLoad'
    };
    buildFetchSpyReject(CODES.GET.ERROR, response);
    await expect(Get.fetch(paths.toggles)).rejects.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyReject(CODES.GET.ERROR, response);
    await expect(Get.fetch(paths.toggles)).rejects.toHaveProperty('message');
  });

  it('Should capture resolve and return ERROR with "message" attribute for a HTTP 500(ERROR CHUNGO) response', async () => {
    const response = {
      statusText: 'PHP Parse error: syntax error, unexpected "{" in index.php on line 20'
    };
    buildFetchSpyResolve(CODES.GET.ERROR, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.ERROR
    );
    buildFetchSpyResolve(CODES.GET.ERROR, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty('message');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 401(NO AUTH) response', async () => {
    const response = {
      message: 'Unauthorized'
    };

    buildFetchSpyResolve(CODES.GET.NO_AUTH, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.GET.NO_AUTH, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return FAIL with "data" attribute for a HTTP 404(NOT FOUND) response', async () => {
    const response = {
      message: 'Not Found'
    };

    buildFetchSpyResolve(CODES.GET.NOT_FOUND, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.FAIL
    );
    buildFetchSpyResolve(CODES.GET.NOT_FOUND, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty('data');
  });

  it('Should capture resolve and return SUCCESS with "data" attribute for a HTTP 200(SUCCESS) response', async () => {
    const response = {
      home: true,
      heavyModule: false
    };
    buildFetchSpyResolve(CODES.GET.SUCCESS, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty(
      'status',
      STATUS.SUCCESS
    );
    buildFetchSpyResolve(CODES.GET.SUCCESS, response);
    await expect(Get.fetch(paths.toggles)).resolves.toHaveProperty('data');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
