# Cadastro de carro.

**Requisitos Funcionais**
Deve ser possível cadastrar um carro.

**Regra de Negocio**
Nao deve ser possível cadastrar um carro com uma placa ja existente.
Nao deve ser cadastrado carro sem disponibilidade por padrão.
Nao deve ser cadastrado carro por usuário sem a role admin.

# Listagem de carros.

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regra de Negocio**
Nao sera necessário estar logado no sistema.

# Cadastro de especificação no carro.

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.

**Regra de Negocio**
Nao deve ser possível cadastrar uma especificação para um carro nao cadastrado.
Nao deve ser possível cadastrar uma especificação ja existente para o mesmo carro.
Nao deve ser cadastrado carro por usuário sem a role admin.
Nao deve ser cadastrado carro por usuário sem a role admin.

# Cadastro de imagens do carro.

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos nao funcionais**
Utilizar o multer para upload dos arquivos.

**Regra de Negocio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
Nao deve ser cadastrado carro por usuário sem a role admin.

# Aluguel de carro.

**Requisitos funcionais**
Deve ser possível cadastrar um aluguel.

**Regra de Negocio**
O aluguel deve ter duração minima de 24 horas.
Nao deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
Nao deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
