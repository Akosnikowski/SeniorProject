import * as C from './App.styles';

export const InfoSummary = () => {
    return(
      
    <C.Container>
      <C.Area>
        <C.Menu>
          <div >
            <img
              src="./assets/icons/UCCE.png"
              alt="logo"
            />
          </div>
        </C.Menu>

        <C.Body>
          <C.Title>Project Information</C.Title>
          <div class='title-info'>
            <C.SubTitle>Dr. Cameron Pittelkow</C.SubTitle>
          </div>
          <div class='flex-parent'>
            <div class='flex-child'>
              <img
                src="./assets/icons/pittelkow.jpg"
                alt="logo"
              />
            </div>
            <div class='flex-child'>
              <C.Desc>
                  Cameron joined the Department of Plant Sciences in 2019. He is an agronomist who places equal emphasis on food security and 
                  environmental sustainability. His research is focused on developing cropping systems and management strategies to enhance 
                  productivity while minimizing nitrogen, carbon, water, and energy footprints in agriculture. Cameron was Assistant Professor 
                  at the University of Illinois from 2014-2019 before moving to UC Davis. He maintains Adjunct status there while finishing 
                  projects and advising graduate students until completion of their degrees. He received his BA in Environmental Biology from 
                  Colgate University, and his MS and PhD degrees from UC Davis in International Agricultural Development and Agronomy, 
                  respectively.
              </C.Desc>
            </div>
          </div>
            <C.SubTitle>Development Team</C.SubTitle>
          <div class='flex-parent'>
            <div class='flex-child'>
            <C.Desc>
                    The team that developed this web application is a group of four UC Davis students that were hired by Cameron Pittelkow to create
                    create an interactive visualization for each of the survey findings as a senior project. 
            </C.Desc>
            </div>
            <div class='flex-child'>
            <img
              src="./assets/icons/us.jpg"
              alt="logo"
              width={400}
              height={200}
            />
            </div>
          </div>    
          <C.Button>
            <button>
              Contact Cameron Pittelkow
              <img 
                src="/assets/icons/arrow.png"
                alt="arrow"
              />
            </button>
          </C.Button>
        </C.Body>
      </C.Area>
    </C.Container>
    
    );
}