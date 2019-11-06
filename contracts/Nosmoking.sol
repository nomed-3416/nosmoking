pragma solidity ^0.4.25;

contract Nosmoking{
    
    struct User{
        bool health;
        uint nosmoking;
        uint counter;
    }

    uint public count;
    uint public cost;
    uint public last;
    uint public first;
    address public addr;
    
    mapping(address => User) public users;

    
    constructor() public {
        addr = msg.sender;
        first = block.timestamp;
    }
    
    modifier onlyOwner{
        require(addr == msg.sender);
        _;
    }

    function setCount() public onlyOwner{
        users[addr].counter += 1;
        count = users[addr].counter;
        last = block.timestamp/1 seconds;
        
        
    }
    
    function countCost()public {
        cost = count * 25;
    }
    
    function noSmoking() public view returns(uint){
        return((block.timestamp - last)/ 1 seconds);
    }
    
    function checkHealth() public onlyOwner{
        
        User storage sender = users[msg.sender];
        
        sender.nosmoking = (block.timestamp - last)/1 seconds;
        
        if(((count / (last - first)) * 10000) > 3 ){
        sender.health = true;
        
        } else {
        sender.health = false; 
        }
    }
}