// import clsx from 'clsx';

import { Wallet } from './wallet';
import { AccountsModal } from './accounts-modal';
import { ReactComponent as userSVG } from  '@/assets/images/icons/login.svg'; // 'assets/images/icons/login.svg';

import { useApi, useAccount, useBalance, useBalanceFormat } from '@gear-js/react-hooks';

// import { Button } from '@/components/ui/button';
import { Button } from '@gear-js/ui';
// import { AvaVaraBlack, ChevronDown, CrossIcon } from '@/assets/temp/images';

import { useState } from 'react';

export function AccountInfo() {
  const { isApiReady } = useApi();
  const { account, accounts } = useAccount();
  const { balance } = useBalance(account?.address);
  const { getFormattedBalance } = useBalanceFormat();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedBalance = isApiReady && balance ? getFormattedBalance(balance) : undefined;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {account ? (
        <Wallet balance={formattedBalance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <Button icon={userSVG} text="Sign in" onClick={openModal} />
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}


// return (
  //   <>
  //     <div className={clsx(styles.wrapper, className)}>
  //       {!!account && (
  //         <>
  //           {formattedBalance && (
  //             <VaraBalance value={formattedBalance.value} unit={formattedBalance.unit} className={styles.balance} />
  //           )}

  //           <Button variant="text" className={styles.openWallet} onClick={openWallet}>
  //             {isOpen ? (
  //               <CrossIcon />
  //             ) : (
  //               <>
  //                 <AvaVaraBlack width={24} height={24} />
  //                 <ChevronDown />
  //               </>
  //             )}
  //           </Button>
  //         </>
  //       )}
  //     </div>
  //   </>
  // );