import type { AuditEntry, Branch, Customer, Employee, MenuItem, MenuType, Order, ReportSummary, User } from '@/domain/types'
export const demoUser: User = { id: 'u1', name: 'Demo Super Admin', email: 'admin@mifta.example', role: 'SUPER_ADMIN', branchIds: ['b1','b2','b3'] }
export const branches: Branch[] = [
  { id:'b1',code:'LON01',name:'Whitechapel',postcode:'E1 5AB',city:'London',telephone:'020 7946 1234',active:true },
  { id:'b2',code:'LON02',name:'Bethnal Green',postcode:'E2 6AA',city:'London',telephone:'020 7946 2345',active:true },
  { id:'b3',code:'MAN01',name:'Manchester Central',postcode:'M1 2AA',city:'Manchester',telephone:'0161 555 0100',active:true },
]
export const employees: Employee[] = [
  {id:'s1',staffCode:'C001',fullName:'Ahmed Hussain',role:'CASHIER',branchIds:['b1'],email:'',active:true},
  {id:'s2',staffCode:'M001',fullName:'Sara Malik',role:'BRANCH_MANAGER',branchIds:['b1'],email:'sara@mifta.example',active:true},
  {id:'s3',staffCode:'A001',fullName:'Demo Super Admin',role:'SUPER_ADMIN',branchIds:['b1','b2','b3'],email:'admin@mifta.example',active:true},
]
export const menuTypes: MenuType[] = [
  {id:'t1',name:'Traditional Starters',menu:'Menu',sortOrder:1,active:true},
  {id:'t2',name:'Tandoori',menu:'Menu',sortOrder:2,active:true},
  {id:'t3',name:"Mifta's Specials",menu:'Menu',sortOrder:3,active:true},
  {id:'t4',name:'Mossalla Dishes',menu:'Menu',sortOrder:4,active:true},
  {id:'t5',name:'House Specials',menu:'Menu',sortOrder:5,active:true},
  {id:'t6',name:'Traditional',menu:'Menu',sortOrder:6,active:true},
  {id:'t7',name:'Balti Dishes',menu:'Menu',sortOrder:7,active:true},
  {id:'t8',name:'Biryani',menu:'Menu',sortOrder:8,active:true},
  {id:'t9',name:'Vegetarian and Side',menu:'Menu',sortOrder:9,active:true},
  {id:'t10',name:'Rice',menu:'Menu',sortOrder:10,active:true},
  {id:'t11',name:'Breads',menu:'Menu',sortOrder:11,active:true},
  {id:'t12',name:'Sundries',menu:'Menu',sortOrder:12,active:true},
]
function food(id:string,itemNumber:string,posName:string,typeId:string,counter:number,phone:number=counter,online:number=phone,colour?:string):MenuItem {
 return {id,itemNumber,posName,fullName:posName,kitchenName:posName,typeId,vatRate:20,allergens:[],available:true,colour,pricesPence:{COUNTER:counter,PHONE:phone,ONLINE:online}}
}
export const menuItems: MenuItem[] = [
 food('i0','000','Open Food','t1',0,0,0,'#4de44f'),food('i1','101','K PR PURI','t1',795,845),
 food('i2','102','TAN KING PRAWN','t1',995,1095),food('i3','103','K.PR.B FLY (ST)','t1',895),
 food('i4','104','MIXED STARTER','t1',895),food('i5','105','SHIMLA MIRCH (ST)','t1',795),
 food('i6','106','PRAWN PURI (ST)','t1',795),food('i7','107','TAN CHICKEN','t1',795),
 food('i8','108','LAMB TIKKA (ST)','t1',795),food('i9','109','CHICKEN TIKKA (ST)','t1',795),
 food('i10','201','NAWABI LAMB','t5',1295,1395,1495),food('i11','202','TAVA LAMB','t5',1295,1395,1495),
 food('i12','203','HOUSE SPECIAL LAMB','t5',1295,1395,1495),food('i13','204','SIZZLING DUCK','t5',1295,1395,1495),
 food('i14','301','MIXED RAITHA','t12',350,395),food('i15','302','CHUTNEY TRAY','t12',350),
 food('i16','303','POPPADOM','t12',95),food('i17','304','SPICY POPPADOM','t12',110),
 food('i18','305','CHIPS','t12',250),food('i19','306','BANQUET NIGHT','t12',2495,2495,2495,'#e6a3a3'),
 food('i20','307','MANGO CHUTNEY','t12',95),food('i21','308','MINT SAUCE','t12',95),
 food('i22','309','R - Onion','t12',95),food('i23','310','Onion Salad','t12',110),
]
export const customers: Customer[] = [
 {id:'c1',name:'Ahmed Khan',phone:'+447911123456',postcode:'E1 5AB',address:'12 Green Street, Whitechapel, London',orderCount:18},
 {id:'c2',name:'Sara Begum',phone:'+447712559900',postcode:'E2 6AA',address:'Bethnal Green, London',orderCount:9},
 {id:'c3',name:'John Smith',phone:'+447700900221',postcode:'E1 6AN',address:'Whitechapel, London',orderCount:14},
]
export const orders: Order[] = [
 {id:'o1',orderNumber:'001',branchId:'b1',channel:'PHONE',fulfilment:'DELIVERY',status:'PLACED',paymentStatus:'UNPAID',createdAt:'2026-11-16T13:40:00Z',customerName:'Ahmed Khan',totalPence:5180,lines:[]},
 {id:'o2',orderNumber:'002',branchId:'b1',channel:'COUNTER',fulfilment:'TAKEAWAY',status:'COMPLETED',paymentStatus:'PAID',createdAt:'2026-11-16T13:22:00Z',customerName:'Walk-in',totalPence:1895,lines:[]},
 {id:'o3',orderNumber:'003',branchId:'b2',channel:'PHONE',fulfilment:'COLLECTION',status:'READY',paymentStatus:'UNPAID',createdAt:'2026-11-16T12:57:00Z',customerName:'Sara Begum',totalPence:3450,lines:[]},
]
export const auditEntries: AuditEntry[] = [
 {id:'a1',occurredAt:'2026-11-16T13:42:00Z',user:'A001',branch:'Whitechapel',action:'Menu price updated',target:'TAVA LAMB'},
 {id:'a2',occurredAt:'2026-11-16T13:30:00Z',user:'M001',branch:'Whitechapel',action:'Void approved',target:'Order 038'},
]
export const reportSummary:ReportSummary={grossPence:1254030,orderCount:482,refundsPence:3500,deliveryCount:212}
