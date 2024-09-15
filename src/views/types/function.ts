
import Function from "../../database/callable";
import ParmTreeItem from "./ParmTreeItem";

export async function getChildren (schema: string, specificName: string): Promise<ParmTreeItem[]> {
  const parms = (await Function.getParms(schema, specificName)).data;

  return parms.map(parm => new ParmTreeItem(schema, specificName, parm));
}