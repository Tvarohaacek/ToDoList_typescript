interface Account{
    GetPermissions(): void
}

class Admin implements Account{
    GetPermissions(): string[] {
        return ["manage_users", "manage_guest", "manage_own", "check_balance"];
    }
}

class Customer implements Account {
    GetPermissions(): string[] {
        return ["manage_own", "check_balance"];
    }
}

class Guest implements Account{
    GetPermissions(): string[] {
        return ["check_balance"];
    }
}

class AccountFactory{
    static createAccount(AccountType: string): Account {
        if (AccountType === "admin")
            return new Admin();
        else if (AccountType === "customer")
            return new Customer();
        else if (AccountType === "guest"){
            return new Guest();
        }
        else {
            throw new Error("účet nelze založit")
        }
    }
}

const account = AccountFactory.createAccount("guest");
account.GetPermissions();