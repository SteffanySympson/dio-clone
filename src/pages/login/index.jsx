import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Title, Column, TitleLogin, SubtitleLogin, ForgotText, CreateText, Row, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {

    const navigate = useNavigate();
    
    const handleClickSignIn = () => {
        navigate("/feed");
    }
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  />
                            <Input ptype="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha"/>
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText>Criar Conta</CreateText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }