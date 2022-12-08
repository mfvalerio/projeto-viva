package projeto_viva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto_viva.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {

}
