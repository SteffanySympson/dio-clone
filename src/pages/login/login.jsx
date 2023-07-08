import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button/button';
import { Header } from '../../components/Header/header';
import { Input } from '../../components/Input/input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, ForgotText, CreateText, Row, Wrapper, ErrorText } from './styles';

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);


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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input control={control} placeholder="E-mail" leftIcon={<MdEmail />} name="email"  />
                            <ErrorText>{errors.email?.message}</ErrorText>
                            <Input control={control} type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha"/>
                            <ErrorText>{errors.password?.message}</ErrorText>
                            <Button title="Entrar" variant="secondary" type="submit"/>
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