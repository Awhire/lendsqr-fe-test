
import briefcase from '../../assets/sidebar/briefcase.svg'
import user from '../../assets/sidebar/user.svg'
import decision from '../../assets/sidebar/decision.svg'
import fees from '../../assets/sidebar/fees.svg'
import guarantor from '../../assets/sidebar/guarantor.svg'
import home from '../../assets/sidebar/home.svg'
import karma from '../../assets/sidebar/karma.svg'
import loan from '../../assets/sidebar/loan.svg'
import loanPro from '../../assets/sidebar/loan-pro.svg'
import prefer from '../../assets/sidebar/prefer.svg'
import report from '../../assets/sidebar/report.svg'
import saving from '../../assets/sidebar/saving.svg'
import savingPro from '../../assets/sidebar/saving-pro.svg'
import serviceAcct from '../../assets/sidebar/service-acct.svg'
import settle from '../../assets/sidebar/settle.svg'
import service from '../../assets/sidebar/service.svg'
import trans from '../../assets/sidebar/trans.svg'
import whitelist from '../../assets/sidebar/whitelist.svg'
import feePrice from '../../assets/sidebar/feePrice.svg'
import audit from '../../assets/sidebar/audit.svg'


const  MenuItems = [
    {
        name: "Dashboard",
        icon: home,
        path: "/dashboard",
        alt: "dashboard-icon"
    },
    {
        categories: "CUSTOMER",
        name: "User",
        icon: user,
        path: "/user",
        alt: "user-icon"
    },
    {
        name: "Guarantors",
        icon: guarantor,
        path: "/guarantor",
        alt: "guarantor-icon"
    },
    {
        name: "Loans",
        icon: loan,
        path: "/loans",
        alt: "loans-icon"
    },
    {
        name: "Decision",
        icon: decision,
        path: "/decision",
        alt: "decision-models-icon"
    },
    {
        name: "Savings",
        icon: saving,
        path: "/savings",
        alt: "saving-icon"
    },
    {
        name: "Loan Request",
        icon: loanPro,
        path: "/loan-request",
        alt: "loan-request-icon"
    },
    {
        name: "Whitelist",
        icon: whitelist,
        path: "/whitelist",
        alt: "whitelist-icon"
    },
    {
        name: "Karma",
        icon: karma,
        path: "/karma",
        alt: "karma-icon"
    },
    {
        categories: "BUSINESSES",
        name: "Organization",
        icon: briefcase,
        path: "/organization",
        alt: "organization-icon"
    },
    {
        name: "Loan Product",
        icon: loanPro,
        path: "/loan-product",
        alt: "loan-product-icon"
    },
    {
        name: "Savings Products",
        icon: savingPro,
        path: "/saving-products",
        alt: "savings-Products-icon"
    },
    {
        name: "Fees And Charges",
        icon: fees,
        path: "/fees&charges",
        alt: "fees-icon"
    },
    {
        name: "Transaction",
        icon: trans,
        path: "/transaction",
        alt: "transaction-icon"
    },
    {
        name: "Service",
        icon: service,
        path: "/service",
        alt: "service-icon"
    },
    {
        name: "Service And Account",
        icon: serviceAcct,
        path: "/service&amount",
        alt: "service-account-icon"
    },
    {
        name: "Settlements",
        icon: settle,
        path: "/settlements",
        alt: "settlements-icon"
    },
    {
        name: "Reports",
        icon: report,
        path: "/reports",
        alt: "reports-icon"
    },
    {
        categories: "SETTINGS",
        name: "Preference",
        icon: prefer,
        path: "/preference",
        alt: "preference-icon"
    },
    {
        name: "Fees And Pricing",
        icon: feePrice,
        path: "/fee&pricing",
        alt: "fee-price-icon"
    },
    {
        name: "Audit Log",
        icon: audit,
        path: "/audit-log",
        alt: "audit-icon"
    },
   
]


export default MenuItems