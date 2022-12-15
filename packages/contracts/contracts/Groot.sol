// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20 {
    // 两个事件
    // 转账事件
    event Transfer(address indexed from, address indexed to, uint256 value);
    // 授权事件
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // 6 个函数
    // 1.返回代币总量
    function totalSupply() external view returns (uint256);

    // 2.返回 `account` 所持有的 token 数量
    function balanceOf(address account) external view returns (uint256);

    // 3.转账，从调用者账户到到另一个账户 `to`，成功返回 true;
    function transfer(address to, uint256 amount) external returns (bool);

    // 4.返回授权额度，返回 owner 账户授权给 spender 账户的额度，默认为 0
    function allowance(address owner, address spender) external returns (uint256);

    // 5.调用者账户给 spender 账户授权 amount 数量代币
    function approval(address spender, uint256 amount) external returns (bool);

    // 6.转账，通过授权机制，从 from 账户向 to 账户转账 amount 数量代币，转账的部分会从调用者的 allowance 中扣除
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract Groot is IERC20 {
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;
    uint256 public override totalSupply;
    string public name;
    string public symbol;
    // 小数位数
    uint8 public decimals = 18;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function transfer(address recipient, uint256 amount) external override returns (bool) {
        require(amount <= balanceOf[msg.sender], "Insufficient Balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approval(address spender, uint256 amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address spender,
        address recipient,
        uint256 amount
    ) external override returns (bool) {
        uint256 approvalAmount = allowance[msg.sender][spender];
        require(amount <= approvalAmount, "Insufficient approval amount");
        allowance[msg.sender][spender] -= amount;
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;

        emit Transfer(spender, recipient, amount);
        return true;
    }

    function mint(uint256 amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint256 amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(address(0), msg.sender, amount);
    }
}
