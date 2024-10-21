import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

 sobreMim: string = 'Sou desenvolvedor frontend, as tecnologias usadas por mim em meus projetos são predominantemente HTML | CSS | Typescript | Angular. Porém também tenho como foco de estudos NODE, REACT e EXPRESS. Atualmente estou atuando no suporte técnico de uma empresa que fornece sites e aplicativos para igrejas. Aqui no suporte aprendo como o produto desenvolvido impacta solucionando o problema dele, o que é muito bom! Afinal...Desenvolvemos para solucionar algo para alguém!'
 aboutMe: string = 'I\'m a frontend developer, the technologies I use in my projects are predominantly HTML | CSS | Typescript | Angular. However, I also focus on NODE, REACT and EXPRESS. I\'\m currently working in technical support for a company that provides websites and applications for churches. Here in support I learn how the developed product impacts solving its problem, which is great! After all... We develop to solve something for someone!'
 traduzir: string = 'Traduzir para inglês'
 traslate: string = 'Traslate to portuguese'

 aboutMeText: string = this.sobreMim
 traslateButton: string = this.traslate

 traduzirSobreMim(){
  if(this.aboutMeText === this.sobreMim || ''){
    this.aboutMeText = this.aboutMe
    this.traslateButton = this.traslate
  } else {
    this.aboutMeText = this.sobreMim
    this.traslateButton = this.traduzir
  }
 }
}
