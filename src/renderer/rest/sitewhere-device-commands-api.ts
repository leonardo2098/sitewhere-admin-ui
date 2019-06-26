import * as SiteWhere from "sitewhere-rest-api";
import { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { Store } from "vuex";
import { SiteWhereUiSettings } from "../store";
import { createCoreApiCall, loaderWrapper } from "./sitewhere-api-wrapper";
import {
  IDeviceCommandCreateRequest,
  IDeviceCommand,
  IDeviceCommandSearchCriteria,
  IDeviceCommandResponseFormat,
  IDeviceCommandSearchResults,
  IDeviceCommandNamespaceSearchResults
} from "sitewhere-rest-api";

/**
 * Create new device command.
 * @param store
 * @param request
 */
export function createDeviceCommand(
  store: Store<SiteWhereUiSettings>,
  request: IDeviceCommandCreateRequest
): Promise<AxiosResponse<IDeviceCommand>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommand
  > = SiteWhere.API.DeviceCommands.createDeviceCommand(axios, request);
  return loaderWrapper(store, api);
}

/**
 * Get device command by token.
 * @param store
 * @param token
 * @param format
 */
export function getDeviceCommand(
  store: Store<SiteWhereUiSettings>,
  token: string,
  format: IDeviceCommandResponseFormat
): Promise<AxiosResponse<IDeviceCommand>> {
  let axios = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommand
  > = SiteWhere.API.DeviceCommands.getDeviceCommand(axios, token, format);
  return loaderWrapper(store, api);
}

/**
 * Update an existing device command.
 * @param store
 * @param token
 * @param request
 */
export function updateDeviceCommand(
  store: Store<SiteWhereUiSettings>,
  token: string,
  request: IDeviceCommandCreateRequest
): Promise<AxiosResponse<IDeviceCommand>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommand
  > = SiteWhere.API.DeviceCommands.updateDeviceCommand(axios, token, request);
  return loaderWrapper(store, api);
}

/**
 * List device commands matching criteria.
 * @param store
 * @param criteria
 * @param format
 */
export function listDeviceCommands(
  store: Store<SiteWhereUiSettings>,
  criteria: IDeviceCommandSearchCriteria,
  format: IDeviceCommandResponseFormat
): Promise<AxiosResponse<IDeviceCommandSearchResults>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommandSearchResults
  > = SiteWhere.API.DeviceCommands.listDeviceCommands(axios, criteria, format);
  return loaderWrapper(store, api);
}

/**
 * List device commands matching criteria. Organize results by namespace.
 * @param store
 * @param criteria
 * @param format
 */
export function listDeviceCommandsByNamespace(
  store: Store<SiteWhereUiSettings>,
  criteria: IDeviceCommandSearchCriteria,
  format: IDeviceCommandResponseFormat
): Promise<AxiosResponse<IDeviceCommandNamespaceSearchResults>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommandNamespaceSearchResults
  > = SiteWhere.API.DeviceCommands.listDeviceCommandsForNamespace(
    axios,
    criteria,
    format
  );
  return loaderWrapper(store, api);
}

/**
 * Delete an existing device command.
 * @param store
 * @param token
 */
export function deleteDeviceCommand(
  store: Store<SiteWhereUiSettings>,
  token: string
): Promise<AxiosResponse<IDeviceCommand>> {
  let axios: AxiosInstance = createCoreApiCall(store);
  let api: AxiosPromise<
    IDeviceCommand
  > = SiteWhere.API.DeviceCommands.deleteDeviceCommand(axios, token);
  return loaderWrapper(store, api);
}
