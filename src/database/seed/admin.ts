import { getConnection } from 'typeorm';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';
import '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = randomUUID();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'XXX-XXXX')  
        `
  );

  await connection.close();
}

create().then(() => console.log('User Admin Created.'));
