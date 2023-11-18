import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="mt-5 text-center">
            <h1>Bienvenido maestro Pokemón</h1>
            <img
                src="/pikachu.png"
                alt="pokemon pikachu"
                height="300"
                className="mx-auto" />
        </div>
    );
}