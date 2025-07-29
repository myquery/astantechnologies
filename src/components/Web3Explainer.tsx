export const Web3Explainer = () => {
  return (
    <section className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-primary">Web3</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of digital ownership, decentralized identity, and trustless interactions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-dark-900 text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Own Your Digital Identity</h3>
                <p className="text-gray-400">Connect with ENS domains, Lens profiles, and other on-chain identity systems</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-dark-900 text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Token-Gated Access</h3>
                <p className="text-gray-400">Unlock exclusive features and content based on your NFT and token holdings</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-dark-900 text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">DeFi Integration</h3>
                <p className="text-gray-400">Track earnings, manage staking, and interact with DeFi protocols seamlessly</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/30">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Connect your wallet and experience the future of digital platforms
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between p-3 bg-dark-900/50 rounded-lg">
                  <span className="text-sm">MetaMask</span>
                  <span className="text-primary text-sm">✓ Supported</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-900/50 rounded-lg">
                  <span className="text-sm">WalletConnect</span>
                  <span className="text-primary text-sm">✓ Supported</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-900/50 rounded-lg">
                  <span className="text-sm">Coinbase Wallet</span>
                  <span className="text-primary text-sm">✓ Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};