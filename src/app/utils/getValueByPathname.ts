import _ from "lodash";

export function getValueByPathname(obj: any, path: string) {
  return _.get(obj, path);
}
