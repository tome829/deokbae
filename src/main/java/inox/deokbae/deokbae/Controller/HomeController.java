package inox.deokbae.deokbae.Controller;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
 
// 컨트럴러 어노테이션
@Controller
public class HomeController {
  // 매핑 주소
  @RequestMapping(value = {"/index", "/firstPage.html"})
  public String index(Model model) {
    // 템플릿에 전달할 데이터
    model.addAttribute("data1", "hello world");
    // 템플릿 파일명
    return "firstPage";
  }
}