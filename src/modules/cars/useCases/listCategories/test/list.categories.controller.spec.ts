import { hash } from 'bcrypt';
import { randomUUID } from 'crypto';
import { response } from 'express';
import request from 'supertest';
import * as sinon from 'sinon';
import { assert } from 'chai';
import { Connection } from 'typeorm';
import { app } from '../../../../../app';
import createConnection from '../../../../../database';

let connection: Connection;

describe('List categories', () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();

    const id = randomUUID();
    const password = await hash('admin', 8);

    await connection.query(`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
    values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'XXX-XXXX')  
    `);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to list all categories', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@admin.com.br',
      password: 'admin',
    });

    const { token, id } = responseToken.body;

    await request(app)
      .post('/categories')
      .send({
        name: 'batata bata',
        description: 'batata nova bata',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    await request(app)
      .get('/categories')
      .set({
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        assert.equal(response.status, 200);
        assert.lengthOf(response.body, 1);
        assert.exists(response.body, 'id');
      });
  });
});
