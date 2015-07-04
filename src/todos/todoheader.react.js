import Component from '../components/component.react';
import {msg} from '../intl/store';
import React from 'react-native';
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

import style from './todoheader.style';

class TodoHeader extends Component {

  render() {
    const {navigator, todos, headerActions} = this.props;
    const leftTodos = todos.get('list').filter(todo => !todo.completed).size;

    const headingMessage = leftTodos
      ? (leftTodos > 1 ? 'todos.todos' : 'todos.oneTodo')
      : 'todos.emptyListHeading';

    return (
      <View style={style.container}>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={headerActions.toggleMenu}>
          <Image source={require('image!menu-icon')} style={style.menuLink} />
        </TouchableOpacity>

        <Text style={style.header}>
          {msg(headingMessage, {size: leftTodos})}
        </Text>

      </View>
    );
  }

}

TodoHeader.propTypes = {
  headerActions: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
  todos: React.PropTypes.object.isRequired
};

export default TodoHeader;
