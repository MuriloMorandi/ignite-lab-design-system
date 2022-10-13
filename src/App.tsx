import { Envelope, Lock } from "phosphor-react";
import { Logo } from "./assets/Logo";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";

import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

import "./styles/global.css";

export function App() {
	return (
		<div className="w-screen h-screen flex flex-col bg-gray-900 flex items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />
				<Heading size="lg" className="mt-4">
					Ignite lab
				</Heading>
				<Text className="text-gray-400 mt-1">
					Faça login e começe a usar
				</Text>
			</header>

			<form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold">Endereço de E-mail</Text>
					<TextInput.Root>
						<TextInput.InputIcon>
							<Envelope />
						</TextInput.InputIcon>

						<TextInput.Input
							type="email"
							id="email"
							placeholder="Digite seu e-mail"
						/>
					</TextInput.Root>
				</label>

				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold">Senha</Text>
					<TextInput.Root>
						<TextInput.InputIcon>
							<Lock />
						</TextInput.InputIcon>
						<TextInput.Input
							type="password"
							id="password"
							placeholder="********"
						/>
					</TextInput.Root>
				</label>

				<label htmlFor="remember" className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Text className="text-gray-200">
						Lembrar-me de mim por 30 dias
					</Text>
				</label>

				<Button type="submit" className="mt-4">
					Entrar na plataforma
				</Button>
			</form>

			<footer className="flex flex-col gap-4 items-center mt-8">
				<Text asChild size="sm">
					<a
						href=""
						className="text-gray-400 underline hover:text-gray-200"
					>
						Esqueceu sua senha
					</a>
				</Text>
				<Text asChild size="sm">
					<a
						href=""
						className="text-gray-400 underline hover:text-gray-200"
					>
						Não possui uma conta? Crie uma agora!
					</a>
				</Text>
			</footer>
		</div>
	);
}
