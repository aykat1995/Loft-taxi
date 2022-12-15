import { authMiddleware } from "./authMiddleware.js"
import { authenticate, logIn } from "./actions"
import { serverLogin } from "./api"

jest.mock("./api", () => ({ serverLogin: jest.fn(() => ({success: true})) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('authMiddleware', () => {
  describe("#AUTHENTICATE", () => {
    it('authenticate through api', async () => {
      serverLogin.mockImplementation(async () => ({success: true}));
      const dispatch = jest.fn()

      await authMiddleware({dispatch})()(
        authenticate('test@test.com', '123123')
      );
      expect(serverLogin).toBeCalledWith('test@test.com', '123123');
      expect(dispatch).toBeCalledWith(
        { type: logIn.toString() }
      )
    })
  })
})