import test from 'node:test'
import assert from 'node:assert/strict'
import { addLine, resolveChainPrice, subtotalPence } from '../src/features/pos/domain/pricing.ts'
import type { MenuItem, OrderLine } from '../src/domain/types.ts'

const item: MenuItem = {
  id: 'i1', itemNumber: '101', posName: 'NAWABI LAMB', fullName: 'Nawabi Lamb',
  kitchenName: 'NAWABI LAMB', typeId: 't1', vatRate: 20, allergens: [], available: true,
  pricesPence: { COUNTER: 1295, PHONE: null, ONLINE: 1495 },
}

test('PRC-02: Missing Phone price falls back to Counter price', () => {
  assert.equal(resolveChainPrice(item, 'PHONE'), 1295)
})

test('PRC-03: Online price is used for Online channel', () => {
  assert.equal(resolveChainPrice(item, 'ONLINE'), 1495)
})

test('ORD-10: Adding the same item at the same price increases quantity', () => {
  const first = addLine([], item, 'COUNTER')
  const twice = addLine(first, item, 'COUNTER')
  assert.equal(twice.length, 1)
  assert.equal(twice[0].quantity, 2)
})

test('Order subtotal uses integer pence, not float currency', () => {
  const lines: OrderLine[] = [
    {id:'a',itemId:'i1',name:'NAWABI LAMB',quantity:2,unitPricePence:1295},
    {id:'b',itemId:'i2',name:'POPPADOM',quantity:3,unitPricePence:95},
  ]
  assert.equal(subtotalPence(lines), 2875)
})
