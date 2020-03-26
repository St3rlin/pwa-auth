import { LitElement, TemplateResult } from 'lit-element';
declare type AuthProvider = "Microsoft" | "Google" | "Facebook";
export declare class PwaAuth extends LitElement {
    appearance: "button" | "list";
    signInButtonText: string;
    microsoftButtonText: string;
    googleButtonText: string;
    facebookButtonText: string;
    msClientId: string | undefined | null;
    googleClientId: string | undefined | null;
    facebookAppId: string | undefined | null;
    autoSignIn: "none" | "user-choice" | "first-available";
    menuOpened: boolean;
    menuPlacement: "start" | "end";
    disabled: boolean;
    static readonly providerUrls: Record<AuthProvider, string>;
    static styles: import("lit-element").CSSResult;
    render(): TemplateResult;
    private renderLoginButton;
    private dropdownFocusOut;
    private renderProviderButtons;
    private signInClicked;
    private toggleMenu;
    private signInMs;
    private signInGoogle;
    private signInFacebook;
    private loginCompleted;
    private tryStoreCredential;
    private tryAutoSignIn;
    private getStoredCredential;
    private credentialToLoginResult;
    private getProviderNameFromUrl;
}
export {};
