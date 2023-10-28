import NFT1 from 'assets/images/features/NFT1.png';
import NFT2 from 'assets/images/features/NFT2.png';
import NFT3 from 'assets/images/features/NFT3.png';
import { Feature } from './Feature'; // Asegúrate de importar el nuevo componente Feature
import './Home.scss';

const featureData = [
  {
    id: 1,
    image: NFT1,
    title: 'Buy NFTs',
    content: 'We provide you with a wide range of unique NFTs with different abilities to destroy your enemies!  Each NFT in our collection possesses exceptional powers and attributes that can be harnessed to gain an edge in battle. From fierce warriors wielding legendary weapons to mystical creatures with awe-inspiring abilities, our NFTs offer an unparalleled opportunity to dominate your adversaries.',
  },
  {
    id: 2,
    image: NFT2,
    title: 'Win more NFTs',
    content: 'Defeat your enemies and conquer their NFTs to establish your dominance in the digital realm. As you emerge victorious in battles, seize the opportunity to claim the spoils of war by acquiring their valuable NFTs. Each conquered NFT becomes a symbol of your triumph, a testament to your superior strategy and prowess.',
  },
  {
    id: 3,
    image: NFT3,
    title: 'Exchange and Upgrade Your NFTs',
    content: 'Maximize the potential of your NFT collection by exchanging and upgrading your tokens. Each NFT possesses a distinct level and a set of skills that contribute to its overall power. With our exchange platform, you can trade your NFTs for others of similar rank, enabling you to fine-tune your lineup and optimize your strategic advantages. Whether you&apos;re seeking to enhance your team&apos;s synergy or unlock new abilities, our exchange system offers a seamless way to evolve and improve your NFT roster. Stay ahead of the competition by constantly adapting and refining your collection through strategic exchanges.',
  },
];

function Features() {
  return (
    <div style={{ marginBlock: '5%' }} className='text-light' id='Features'>
      <div className='features-container'>
      {featureData.map((feature) => (
        <Feature key={feature.id} image={feature.image} title={feature.title} content={feature.content} />
      ))}
      </div>
    </div>
  );
}

export { Features };
