import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<    {}, {
expand: string;
icon: string;
fontWeight: string;
type: string;
iconColor: string;
$props: {
readonly expand?: string | undefined;
readonly icon?: string | undefined;
readonly fontWeight?: string | undefined;
readonly type?: string | undefined;
readonly iconColor?: string | undefined;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLButtonElement>;

declare type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});

export declare const AtnButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const AtnCheckbox: DefineComponent<    {}, {
$emit: (event: "update:inputValue", ...args: any[]) => void;
type: string;
label: string;
options: unknown[];
optionName: string;
value: string;
$props: {
readonly type?: string | undefined;
readonly label?: string | undefined;
readonly options?: unknown[] | undefined;
readonly optionName?: string | undefined;
readonly value?: string | undefined;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare const AtnInput: DefineComponent<    {}, {
expand: string;
icon: string;
type: string;
placeholder: string;
label: string;
$props: {
readonly expand?: string | undefined;
readonly icon?: string | undefined;
readonly type?: string | undefined;
readonly placeholder?: string | undefined;
readonly label?: string | undefined;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare const AtnRadio: DefineComponent<    {}, {
$emit: (event: "update:inputValue", ...args: any[]) => void;
type: string;
label: string;
backgroundColorActive: string;
options: unknown[];
optionName: string;
borderColor: string;
value: string;
fontColor: string;
$props: {
readonly type?: string | undefined;
readonly label?: string | undefined;
readonly backgroundColorActive?: string | undefined;
readonly options?: unknown[] | undefined;
readonly optionName?: string | undefined;
readonly borderColor?: string | undefined;
readonly value?: string | undefined;
readonly fontColor?: string | undefined;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare const AtnSelect: DefineComponent<    {}, {
$emit: (event: "update:modelValue", ...args: any[]) => void;
type: string;
label: string;
options: unknown[];
modelValue: string;
extend: string;
$props: {
readonly type?: string | undefined;
readonly label?: string | undefined;
readonly options?: unknown[] | undefined;
readonly modelValue?: string | undefined;
readonly extend?: string | undefined;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {
selectContainer: HTMLDivElement;
}, HTMLDivElement>;

declare interface ThemeOptions {
    globalTheme?: Record<string, any>;
}

declare const ThemePlugin: {
    install(app: App, options?: ThemeOptions): void;
};
export default ThemePlugin;

export { }
