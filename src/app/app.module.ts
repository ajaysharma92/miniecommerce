import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { RecipeDetailComponent } from './recipeBlock/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipeBlock/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBlock/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shoppingBlock/shopping-list.component';
import { ShoppingEditComponent } from './shoppingBlock/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './recipeBlock/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
