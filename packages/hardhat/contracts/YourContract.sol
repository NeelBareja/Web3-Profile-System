//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
// import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {

    struct User {
        string name;
        uint256 age;
        string profession;
        string bio;
    }

    mapping (address => User) private users;

    event userInfoAdded(address indexed user);

    function setUserInfo(string memory _name, uint256 _age, string memory _profession, string memory _bio) public {
        users[msg.sender] = User(_name, _age, _profession, _bio);
        emit userInfoAdded(msg.sender);
    }

    function getUserInfo(address userAddress) public view returns(string memory, uint256, string memory, string memory) {
        User memory u = users[userAddress];
        return (u.name, u.age, u.profession, u.bio);
    }
}

