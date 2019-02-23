FROM mysql:5.7.23

ADD ./my.cnf /etc/mysql/conf.d/my.cnf

RUN chmod 644 /etc/mysql/my.cnf

CMD ["mysqld"]