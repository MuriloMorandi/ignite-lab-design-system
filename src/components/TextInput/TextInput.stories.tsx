import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from ".";

export default {
	title: "Components/TextInput",
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.InputIcon>
				<Envelope />
			</TextInput.InputIcon>,
			<TextInput.Input placeholder="Type your e-mail address" />,
		],
	},
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithOutIcon: StoryObj<TextInputRootProps> = {
	args: {
		children: <TextInput.Input placeholder="Type your e-mail address" />,
	},
};
