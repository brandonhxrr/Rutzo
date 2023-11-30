import { HexString } from '@gear-js/api';

interface Contract {
  PROGRAM_ID: `0x${string}`,
  METADATA: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: import.meta.env.VITE_NODE_ADDRESS,
  BACK: import.meta.env.VITE_BACKEND_ADDRESS,
  GAME: import.meta.env.VITE_CONTRACT_ADDRESS as HexString,
};

export const ROUTES = {
  HOME: '/',
  GAME: '/game',
  NOTFOUND: '*',
};

export const MAIN_CONTRACT: Contract = {
  PROGRAM_ID: "0x33299ddb5871d6f885638b077fb5e04c60ddff6a12bc81dcae114d188ed88ac9",
  METADATA: "0002000100000000000108000000010d000000000108000000010d0000000001110000000112000000a94ac40008406d61696e5f636f6e74726163745f696f40496e6974436f6e74726163744461746100001001306e66745f636f6e747261637404013c4f7074696f6e3c4163746f7249643e00015c746f6b656e735f6d657461646174615f64656661756c741401485665633c546f6b656e4d657461646174613e000160636f6e74726163745f746f5f726563656976655f6461746104013c4f7074696f6e3c4163746f7249643e000154636f6e74726163745f746f5f73656e645f6461746104013c4f7074696f6e3c4163746f7249643e00000404184f7074696f6e04045401080108104e6f6e6500000010536f6d6504000800000100000810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000c01205b75383b2033325d00000c000003200000001000100000050300140000021800181030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e14746f6b656e34546f6b656e4d6574616461746100001001106e616d651c0118537472696e6700012c6465736372697074696f6e1c0118537472696e670001146d656469611c0118537472696e670001247265666572656e63651c0118537472696e6700001c00000502002008406d61696e5f636f6e74726163745f696f2c5275747a6f416374696f6e00013c2c4d6573736167655465737400000020506c617947616d65040024011c546f6b656e4964000100204d696e7443617264040120746f6b656e5f69641001087538000200345365744e465441646472657373040008011c4163746f724964000300205265676973746572000400344164644e6674466f7253616c65080138746f6b656e5f6d65746164617461180134546f6b656e4d6574616461746100011476616c756530011075313238000500184275794e4654040024011c546f6b656e496400060034417070726f76654d696e746572040008011c4163746f7249640007005044656c6567617465417070726f76656455736572040008011c4163746f7249640008007c536574436f6e7472616374546f52656365697665496e666f726d6174696f6e040008011c4163746f72496400090054536574436f6e7472616374546f53656e6444617461040008011c4163746f724964000a0094526573746f7265496e666f726d6174696f6e46726f6d4f6c644d61696e436f6e7472616374000b0044476574416c6c496e666f726d6174696f6e000c002847657450726f66697473000d003844656c657465436f6e7472616374000e000024083c7072696d69746976655f74797065731055323536000004002801205b7536343b20345d000028000003040000002c002c00000506003000000507003408406d61696e5f636f6e74726163745f696f285275747a6f4576656e740001a84c4d65737361676554657374526573706f6e7365000000184d696e746564040024011c546f6b656e4964000100404e4654436f6e747261637453617665640002005c4572726f7243616c6c696e674e4654436f6e7472616374000300445573657249734e6f74417070726f7665640400080118557365724964000400445573657249734e6f745468654f776e6572040008011855736572496400050020417070726f76656404000801185573657249640006005455736572417070726f7665644e6f7445786973747304000801185573657249640007004c417070726f7665645573657244656c6574656404000801185573657249640008002c4572726f72427579696e6704001c0118537472696e6700090044496e73756666696369656e7446756e647304003001204e46545072696365000a006c4e667457697468546f6b656e4964446f65734e6f74457869737473040024011c546f6b656e4964000b00484e46545769746849644e6f7445786973747304001001087538000c004c4e465454797065446f65734e6f74457869737404001c0118537472696e67000d004c4163636f756e74416c726561647945786973740400080118557365724964000e00404163636f756e744e6f744578697374730400080118557365724964000f00544163636f756e74416c7265616479496e4d6174636804000801185573657249640010003c51756572794e6f74416c6c6f77656404001c0118537472696e670011003852656769737465725375636365730012002c4c6f67696e5375636365730013002c55736572496e4d61746368040008011c4d6174636849640014004c4572726f72496e4a6f696e696e674d61746368001500385075726368617365537563636573001600305265706c7953756363657373001700244e6577506c617965720400080118557365724964001800344d6174636846696e6973686564001900304d6174636843726561746564001a0050557365724973416c7265616479496e4147616d6504002c010c753634001b003c50656e64696e675472616e73666572040024011c546f6b656e4964001c003c5472616e7366657253756363657373040024011c546f6b656e4964001d00784e465449734e6f74417070726f76656442794d61696e436f6e7472616374040024011c546f6b656e4964001e0048436f6d6d756e69636174696f6e4572726f72040008011c4163746f724964001f003c4d61784d696e74735265616368656404000801185573657249640020001c50726f666974730400300110753132380021002c436f6e7472616374536574040008011c4163746f72496400220050436f6e747261637449734e6f745468654d61696e00230050496e666f726d6174696f6e5265636f7665726564002400684572726f7252657472696576696e67496e666f726d6174696f6e0025006c57726f6e674d65737361676546726f6d4e4654436f6e7472616374002600484e4654547970654973496e636f7272656374040038014428546f6b656e49642c20537472696e672900270034436f6e7472616374734461746104003c01404461746146726f6d436f6e74726163740028006c436f6e7472616374546f52656365697665446174614e6f74536574002900003800000408241c003c000002400040000004080814004408406d61696e5f636f6e74726163745f696f3c5275747a6f5374617465517565727900012838557365724973526567697374657204000801185573657249640000004c47616d65496e666f726d6174696f6e4279496404002c010c753634000100384d6174636853746174654279496404002c010c75363400020044506c61796572496e666f726d6174696f6e04000801185573657249640003003c506c617965724973496e4d61746368040008011c4163746f7249640004004c4e46547350757263686173656442795573657204000801185573657249640005005c5573657243616e4d696e7444656661756c74734e4654730400080118557365724964000600284e4654734f6e53616c650007003044656661756c74734e4654530008000c416c6c000900004808406d61696e5f636f6e74726163745f696f3c5275747a6f53746174655265706c7900013038557365724973526567697374657204004c0110626f6f6c0000003c47616d65496e666f726d6174696f6e04005001404d61746368496e666f726d6174696f6e00010044506c61796572496e666f726d6174696f6e04006401345573657244617461537461746500020034506c61796572496e4d61746368040068012c4f7074696f6e3c7536343e000300284d61746368537461746504006001284d617463685374617465000400345075726368617365644e66747304006c01205665633c7536343e0005005c5573657243616e4d696e7444656661756c74734e66747304004c0110626f6f6c000600284e4654734f6e53616c6504007001385665633c4e46544f6e53616c653e0007003044656661756c74734e465473040078013c5665633c4e465444656661756c743e000800484d61746368446f65734e6f744578697374730009004455736572446f65734e6f74457869737473000a000c416c6c0400800134436f6e74726163745374617465000b00004c00000500005008406d61696e5f636f6e74726163745f696f404d61746368496e666f726d6174696f6e00000c0118757365725f315401305573657247616d6544617461000118757365725f325c01504f7074696f6e3c5573657247616d65446174613e00012c6d617463685f73746174656001284d61746368537461746500005408406d61696e5f636f6e74726163745f696f305573657247616d6544617461000014011c757365725f696408011c4163746f72496400012863686f73656e5f6e667424011c546f6b656e49640001206e66745f7479706558012c4e465443617264547970650001246e66745f706f77657210010875380001206e66745f64617461180134546f6b656e4d6574616461746100005808406d61696e5f636f6e74726163745f696f2c4e46544361726454797065000148184e6f726d616c000000104669726500010014576174657200020014477261737300030020456c6563747269630004000c49636500050014466967687400060018506f69736f6e0007001847726f756e6400080018466c79696e670009001c50737963686963000a000c427567000b0010526f636b000c001447686f7374000d0018447261676f6e000e00104461726b000f0014537465656c001000144661697279001100005c04184f7074696f6e04045401540108104e6f6e6500000010536f6d6504005400000100006008406d61696e5f636f6e74726163745f696f284d6174636853746174650001102046696e697368656408011877696e6e657208011c4163746f7249640001146c6f73657208011c4163746f72496400000028496e50726f6772657373000100244e6f744578697374730002001044726177000300006408406d61696e5f636f6e74726163745f696f345573657244617461537461746500000c013063757272656e745f67616d6568012c4f7074696f6e3c7536343e000140726563656e745f706173745f67616d6568012c4f7074696f6e3c7536343e000128706173745f67616d65736c01205665633c7536343e00006804184f7074696f6e040454012c0108104e6f6e6500000010536f6d6504002c00000100006c0000022c007000000274007408406d61696e5f636f6e74726163745f696f244e46544f6e53616c650000080120746f6b656e5f696424011c546f6b656e496400011476616c7565300110753132380000780000027c007c08406d61696e5f636f6e74726163745f696f284e465444656661756c7400001401106e616d651c0118537472696e6700012c6465736372697074696f6e1c0118537472696e670001146d656469611c0118537472696e670001247265666572656e63651c0118537472696e6700011c73616c655f69642c010c75363400008008406d61696e5f636f6e74726163745f696f34436f6e7472616374537461746500004001146f776e657208011c4163746f7249640001306e66745f636f6e74726163740401544f7074696f6e3c4e6674436f6e747261637449643e00011467616d65738401545665633c4d61746368496e666f726d6174696f6e3e00013467616d65735f77616974696e676c01205665633c7536343e00016467616d65735f696e666f726d6174696f6e5f62795f757365728801705665633c285573657249642c2055736572446174615374617465293e00011c67616d655f69642c010c75363400015c746f6b656e735f6d657461646174615f64656661756c749001605665633c2875382c20546f6b656e4d65746164617461293e0001346e6674735f666f725f73616c659801605665633c28546f6b656e49642c204e46545072696365293e00016c64656661756c745f746f6b656e735f6d696e7465645f62795f6964a0017c5665633c285573657249642c205573657244656661756c744d696e7473293e000140617070726f7665645f6d696e74657273b0012c5665633c5573657249643e0001387472616e73616374696f6e5f69642c01345472616e73616374696f6e496400014470656e64696e675f7472616e7366657273b401805665633c285573657249642c20285573657249642c20546f6b656e496429293e00011473616c6573c0015c5665633c284163746f7249642c20546f6b656e4964293e000140636f6e74726163745f62616c616e6365300110753132380001406163636570745f646174615f66726f6d04013c4f7074696f6e3c4163746f7249643e00013073656e645f646174615f746f04013c4f7074696f6e3c4163746f7249643e0000840000025000880000028c008c000004080864009000000294009400000408101800980000029c009c00000408243000a0000002a400a40000040808a800a808406d61696e5f636f6e74726163745f696f405573657244656661756c744d696e7473000008012c6e6674735f6d696e746564ac011c5665633c75383e00012063616e5f6d696e744c0110626f6f6c0000ac0000021000b00000020800b4000002b800b80000040808bc00bc00000408082400c0000002bc00"
};

export const NFT_CONTRACT: Contract = {
  PROGRAM_ID: "0x04d35433efc5df373fcae649b9d905d569eb0462d395171ee6f8b8fba111f48b",
  METADATA: "0002000100000000000111000000011a0000000000000001220000000123000000b139cc0008186e66745f696f1c496e69744e46540000100128636f6c6c656374696f6e040128436f6c6c656374696f6e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e00012c636f6e73747261696e747334012c436f6e73747261696e74730001346d61696e5f636f6e747261637418011c4163746f72496400000408186e66745f696f28436f6c6c656374696f6e00000801106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e6700000800000502000c04184f7074696f6e04045401100108104e6f6e6500000010536f6d650400100000010000101030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e24726f79616c7469657324526f79616c7469657300000801206163636f756e74731401185061796f757400011c70657263656e7430010c753136000014042042547265654d617008044b011804560124000400280000001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c000003200000002000200000050300240000050700280000022c002c000004081824003000000504003408186e66745f696f2c436f6e73747261696e747300000801386d61785f6d696e745f636f756e7438012c4f7074696f6e3c7533323e000148617574686f72697a65645f6d696e746572734001305665633c4163746f7249643e00003804184f7074696f6e040454013c0108104e6f6e6500000010536f6d6504003c00000100003c00000505004000000218004408186e66745f696f244e4654416374696f6e000148104d696e740801387472616e73616374696f6e5f696448010c753634000138746f6b656e5f6d657461646174614c0134546f6b656e4d65746164617461000000104275726e0801387472616e73616374696f6e5f696448010c753634000120746f6b656e5f696450011c546f6b656e4964000100205472616e736665720c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000200385472616e736665725061796f75741001387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000118616d6f756e7424011075313238000300244e46545061796f75740801146f776e657218011c4163746f724964000118616d6f756e74240110753132380004001c417070726f76650c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e49640005004044656c656761746564417070726f76650c01387472616e73616374696f6e5f696448010c75363400011c6d65737361676558015c44656c656761746564417070726f76654d6573736167650001247369676e61747572655c01205b75383b2036345d000600144f776e6572040120746f6b656e5f696450011c546f6b656e4964000700284973417070726f766564080108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400080014436c6561720401407472616e73616374696f6e5f6861736860011048323536000900244164644d696e7465720801387472616e73616374696f6e5f696448010c7536340001246d696e7465725f696418011c4163746f724964000a00405472616e7365724e4654546f557365720c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000b001c4e465444617461040050011c546f6b656e4964000c00404e46544461746146726f6d557365727304004001305665633c4163746f7249643e000d003c5365744d61696e436f6e7472616374040018011c4163746f724964000e00284d696e744e465473546f080108746f18011c4163746f7249640001106e6674736401485665633c546f6b656e4d657461646174613e000f002c4275726e416c6c4e4654530010003844656c657465436f6e7472616374001100004800000506004c1030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e14746f6b656e34546f6b656e4d6574616461746100001001106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e670001146d65646961080118537472696e670001247265666572656e6365080118537472696e67000050083c7072696d69746976655f74797065731055323536000004005401205b7536343b20345d000054000003040000004800581030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e2464656c6567617465645c44656c656761746564417070726f76654d6573736167650000140138746f6b656e5f6f776e65725f696418011c4163746f724964000144617070726f7665645f6163746f725f696418011c4163746f7249640001386e66745f70726f6772616d5f696418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400015065787069726174696f6e5f74696d657374616d7048010c75363400005c00000340000000200060083c7072696d69746976655f74797065731048323536000004001c01205b75383b2033325d0000640000024c006808186e66745f696f204e46544576656e7400013c205472616e7366657204006c012c4e46545472616e73666572000000385472616e736665725061796f757404007001444e46545472616e736665725061796f7574000100244e46545061796f757404001401185061796f757400020020417070726f76616c040074012c4e4654417070726f76616c000300144f776e65720801146f776e657218011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000400284973417070726f7665640c0108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000120617070726f766564780110626f6f6c0005002c4d696e74657241646465640401246d696e7465725f696418011c4163746f7249640006001c4e46544461746104007c01544f7074696f6e3c546f6b656e4d657461646174613e00070040546f6b656e49644e6f74457869737473040050011c546f6b656e496400080044416c6c4e4654496e666f726d6174696f6e04008001885665633c284163746f7249642c205665633c546f6b656e4d657461646174613e293e00090064416374696f6e4f6e6c79466f724d61696e436f6e7472616374000a00644d61696e436f6e747261637449734e6f74417070726f766564000b003c4d61696e436f6e7472616374536574000c00284e4654734d696e746564000d0024416c6c4275726e6564000e00006c1030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e46545472616e7366657200000c011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e49640000701030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e08696f444e46545472616e736665725061796f7574000010011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400011c7061796f7574731401185061796f75740000741030676561725f6c69625f6f6c64486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e4654417070726f76616c00000c01146f776e657218011c4163746f724964000140617070726f7665645f6163636f756e7418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400007800000500007c04184f7074696f6e040454014c0108104e6f6e6500000010536f6d6504004c000001000080000002840084000004081864008808186e66745f696f344e46545374617465517565727900010c38546f6b656e73466f724f776e6572040018011c4163746f72496400000024546f6b656e42794964040050011c546f6b656e49640001000c416c6c000200008c08186e66745f696f404e46545374617465526573706f6e736500010c38546f6b656e73466f724f776e657204009001745665633c28546f6b656e49642c20546f6b656e4d65746164617461293e00000024546f6b656e4461746104007c01544f7074696f6e3c546f6b656e4d657461646174613e0001000c416c6c0400980114496f4e4654000200009000000294009400000408504c009808186e66745f696f14496f4e46540000100114746f6b656e9c0128496f4e46545374617465000120746f6b656e5f696450011c546f6b656e49640001146f776e657218011c4163746f7249640001307472616e73616374696f6e73c401545665633c28483235362c204e46544576656e74293e00009c08186e66745f696f28496f4e4654537461746500002001106e616d65080118537472696e6700011873796d626f6c080118537472696e67000120626173655f757269080118537472696e6700012c6f776e65725f62795f6964a0015c5665633c28546f6b656e49642c204163746f724964293e00013c746f6b656e5f617070726f76616c73a801705665633c28546f6b656e49642c205665633c4163746f7249643e293e000150746f6b656e5f6d657461646174615f62795f6964b001945665633c28546f6b656e49642c204f7074696f6e3c546f6b656e4d657461646174613e293e000140746f6b656e735f666f725f6f776e6572b801705665633c284163746f7249642c205665633c546f6b656e49643e293e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e0000a0000002a400a400000408501800a8000002ac00ac00000408504000b0000002b400b400000408507c00b8000002bc00bc0000040818c000c00000025000c4000002c800c800000408606800"
};

export const ONE_TVARA_VALUE = 1000000000000;

