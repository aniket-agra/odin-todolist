import { createItem } from "./src/item";

test ("low priority compared to high priority returns -1", () => {
    const itemLow = createItem();
    itemLow.setDueDate(new Date());
    itemLow.setPriority("low");
    const itemHigh = createItem();
    itemHigh.setDueDate(new Date());
    itemHigh.setPriority("high");
    expect (itemLow.compareTo(itemHigh)).toBe(-1);
});