import './app.scss';
import './global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAccount, useApi } from '@gear-js/react-hooks';
import { Routing } from './pages';
import { ApiLoader } from '@/components';
import { Header, Footer } from '@/components/layout';
import { withProviders } from '@/app/hocs';

// import { useWalletSync } from '@/features/wallet/hooks';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  // useWalletSync();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <Header isAccountVisible={isAccountReady} />
      <main>{isAppReady ? <Routing /> : <ApiLoader />}</main>
      <Footer />
    </>
  );
}

export const App = withProviders(Component);


/*

{
    "name": "Death City Earth",
    "description": "Rock",
    "media": "https://home.rutzo.studio/NFT/rock/zacualpan_rock.jpg",
    "reference": "20"
},
{
    "name": "Chinampa",
    "description": "Water",
    "media": "https://home.rutzo.studio/NFT/water/chinampa_water.jpg",
    "reference": "25"
},
{
    "name": "Chile",
    "description": "Fire",
    "media": "https://home.rutzo.studio/NFT/fire/chile_fire.jpg",
    "reference": "55"
},
{
    "name": "peaceful axolotl",
    "description": "Water",
    "media": "https://home.rutzo.studio/NFT/water/ajolote_water.jpg",
    "reference": "33"
},
{
    "name": "ixchel",
    "description": "Ice",
    "media": "https://home.rutzo.studio/NFT/ice/ixchel_ice.jpg",
    "reference": "33"
},
{
    "name": "tlaloc",
    "description": "Ice",
    "media": "https://home.rutzo.studio/NFT/ice/tlaloc_ice.jpg",
    "reference": "75"
} 

*/
