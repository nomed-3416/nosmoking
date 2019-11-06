const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Compiler = require('./compile');
const interface = Compiler.interface;
const bytecode = Compiler.bytecode;

const provider = new HDWalletProvider(
    'age staff kingdom power novel system alert ginger reopen creek survey language',
    'https://rinkeby.infura.io/263fbc6ad162449998f4ff5189ce8ed5'

);
const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from acount', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode})
        .send({gas: '1000000',from : accounts[0]});

    console.log(interface);
    console.log('Contract deployed to',result.options.address)
    };
deploy();