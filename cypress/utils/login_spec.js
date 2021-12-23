import SessionStorageKeysEnum from "../../src/shared/utils/enums/SessionStorageKeysEnum";

export const doPseudoLogin = () => {
  sessionStorage.setItem(SessionStorageKeysEnum.TOKEN, "token");
};
