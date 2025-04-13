Object.prototype.myGroupBy = function (
  array: any[],
  callback: (element: any) => string
): Record<string, any[]> {
  let groupBy = new Map<string, any[]>();

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const groupName = callback(element);

    if (!groupBy.has(groupName)) {
      groupBy.set(groupName, []);
    }
    const group = groupBy.get(groupName);
    if (group) {
      group.push(element);
    }
  }

  return Object.fromEntries(groupBy);
};