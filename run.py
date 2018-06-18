from app import app

if __name__ == '__main__':
    app.run(debug=app.config.get('DEBUG'))
    
# http://www.math-cs.gordon.edu/courses/cs211/ATMExample/
# http://buildingskills.itmaybeahack.com/book/oodesign-3.1/html/index.html
# http://massivetechinterview.blogspot.com/2015/07/design-chess-game-using-oo-principles.html
